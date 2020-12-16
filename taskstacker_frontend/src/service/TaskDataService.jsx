import axios from 'axios'
import Constants from '../util/Constants'


class TaskDataService {

    componentDidMount() {
        //this.refreshCourses();
    }

    retrieveAllTasks() {
        var return_value = axios.get(`${Constants.TASK_API_URL}/tasks`);
        return return_value;
    }
    
    retrieveTask(id){
        var return_value = axios.get(`${Constants.TASK_API_URL}/tasks/` + id);
        return return_value;
    }


}

export default new TaskDataService()