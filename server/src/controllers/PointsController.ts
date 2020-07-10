import knex from './../database/connection';
import {Request, Response} from 'express';

class PointsController {
    async createPoint(req: Request, res: Response){
        const  {name, email, whatsapp, latitude, longitude, city, uf, items} = req.body;
        const points = await knex('points').insert({
            image: 'image-fake', 
            name, 
            email, 
            whatsapp, 
            latitude, 
            longitude, 
            city, 
            uf
        });
        const pointItems = items.map((item_id: number) => {
            return{
                item_id,
                point_id: points[0] 
            }
        })

        await knex('point_items').insert(pointItems);

        return res.json({success: true})
    }
}

export default new PointsController();

