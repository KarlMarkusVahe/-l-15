import { Request, Response, Router } from "express";
import Person from "../models/person";
import PersonDataViewModel from "../viewModels/PersonDataViewModel";

const router: Router = Router();

router.post('/person', async (req: Request, res: Response) => {
    const data = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        workPosition: req.body.workPosition,
        personalCode: req.body.personalCode,
        email: req.body.email,
        birthDate: req.body.birthDate,
        phone: req.body.phone
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error})
    }
})

router.get('/data-person/:id', async (req: Request, res: Response) => {
    try {
        const data = await Person.findById(req.params.id);
        if (data) {
            const viewModel = new PersonDataViewModel(data?.firstName, data?.lastName, data?.workPosition, data?.email, data?.birthDate, data?.phone);
            res.json(viewModel);
        }
    }
    catch(error){
        res.status(500).json({message: error})
    }
})

export default router