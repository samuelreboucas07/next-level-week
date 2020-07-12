import knex from './../database/connection';
import {Request, Response} from 'express';

class PointsController {
    async createPoint(req: Request, res: Response){
        const  {name, email, whatsapp, latitude, longitude, city, uf, items} = req.body;

        const trx = await knex.transaction(); // Responsável por fazer o rollback dos inserts, descarta o que foi feito caso dê algum erro.

        const point  = {
            image: 'image-fake', 
            name, 
            email, 
            whatsapp, 
            latitude, 
            longitude, 
            city, 
            uf
        };

        const pointsInserted = await trx('points').insert(point);
        const point_id = pointsInserted[0];

        const pointItems = items.map((item_id: number) => {
            return{
                item_id,
                point_id 
            }
        })

        await trx('point_items').insert(pointItems);
        //ERRO ROLLBACK
        await trx.commit();
        return res.json({id: point_id, ...point})
    }

    async show(req: Request, res: Response){
        const {id} = req.params;
        const point = await knex('points').where('id', id).first();
        
    if(!point){
        return res.status(400).json({message: 'Point not found.'})
    }
        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return  res.json({point, items});
    }


}

export default new PointsController();

