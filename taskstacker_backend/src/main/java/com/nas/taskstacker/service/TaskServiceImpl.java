package com.nas.taskstacker.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nas.taskstacker.entity.Task;
import com.nas.taskstacker.repo.TaskRepo;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired TaskRepo taskRepo;
	
	@Override 
	public void completeTask(Long taskId) {
		Optional<Task> taskOpt = taskRepo.findById(taskId);
		
		if (taskOpt.isPresent()) {
			Task task = taskOpt.get();
			task.setComplete("T");
			taskRepo.save(task);
		}
		
	}
	
	@Override 
	public Iterable<Task> findAllNotComplete() {

		return taskRepo.findIncompleteTasks();
		
	}
	
	
}
