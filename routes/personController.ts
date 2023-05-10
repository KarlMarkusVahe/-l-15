import { Request, Response, Router } from "express";
import Person from "../models/person";
import PersonPublicViewModel from "../viewModels/PersonPublicViewModel";

const router: Router = Router();

router.get('/home-person/:id', async (req: Request, res: Response) => {
    try{
        const data = await Person.findById(req.params.id);
        if(data){
            const viewModel = new PersonPublicViewModel(data?.firstName, data?.lastName, data?.workPosition);
            res.json(viewModel);
        }
        else{
            res.status(404).json({message: "person not found"})
        }
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

export default router