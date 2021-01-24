package com.nas.taskstacker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.nas.taskstacker.entity.Task;
import com.nas.taskstacker.service.TaskService;

@RestController
@RequestMapping(value = "/api/task_actions")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class TaskController {
	
	@Autowired TaskService taskService;
	
	@GetMapping(value="/complete_task/{taskId}")
	@ResponseStatus(HttpStatus.OK)
	public void completeTask(@PathVariable(value = "taskId") long taskId)
	{
		taskService.completeTask(taskId);
		
	}
	
	
	@GetMapping(value="/find_all_not_complete")
	@ResponseStatus(HttpStatus.OK)
	public Iterable<Task>  findAllNotComplete()
	{
		return taskService.findAllNotComplete();
	}
	
}
