package com.nas.taskstacker.service;

import com.nas.taskstacker.entity.Task;

public interface TaskService {
	
	public void completeTask(Long taskId);
	
	public Iterable<Task> findAllNotComplete();
	
}
