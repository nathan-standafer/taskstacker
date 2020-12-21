import axios from 'axios'
import Constants from '../util/Constants'


class TaskDataService {

    componentDidMount() {
        //this.refreshCourses();
    }

    retrieveAllTasks() {
        //http://localhost:8080/api/tasks/search/findTasksByPrio
        //TODO - Need a method to not return completed tasks.
        var return_value = axios.get(`${Constants.TASK_API_URL}/tasks/search/findTasksByPrio`);
        return return_value;
    }
    
    retrieveTask(taskId){
        var return_value = axios.get(`${Constants.TASK_API_URL}/tasks/` + taskId);
        return return_value;
    }

    createTask(task){
        return axios.put(`${Constants.TASK_API_URL}/tasks/${task.taskId}`, task);
    }

    updateTask(task){
        return axios.post(`${Constants.TASK_API_URL}/tasks/`, task);
    }

    deleteTask(taskId){
        return axios.delete(`${Constants.TASK_API_URL}/tasks/${taskId}`);
    }


}

export default new TaskDataService()