import axios from 'axios'
import Constants from '../util/Constants'


class TaskDataService {

    componentDidMount() {
        //this.refreshCourses();
    }

    retrieveAllTasks() {
        var return_value = axios.get(`${Constants.TASK_API_URL}/tasks`);
        console.log("*****************" + return_value);
        return return_value;
    }



}

export default new TaskDataService()