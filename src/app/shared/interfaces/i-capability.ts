import { ITask } from './i-task';
export interface ICapability {
    id: number;
    name: string;
    tasks?: ITask[];
}