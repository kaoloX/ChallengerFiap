import { Request, Response} from 'express'
import { getRepository } from 'typeorm'
import { Notifications } from '../entity/Notifications'

export async function save(request: Request, response: Response) {
    const notificationRepository = getRepository(Notifications);

    const savedNotification = await notificationRepository.save(request.body);

    return response.status(200).json(savedNotification);

}

export async function getAll (request: Request, response: Response) {
    const notificationRepository = getRepository(Notifications);

    const allNotifications = await notificationRepository.find();

    return response.json(allNotifications);
}