import { ITask } from './i-task';
import { ICapability } from './i-capability';

export interface INewcomer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    startDate: number;
    capability: ICapability;
    tasks?: ITask[];
}
