package com.nas.taskstacker.repo;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.nas.taskstacker.entity.Task;

@Component 
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	private TaskRepo taskRepo;
	
	public void run(String...strings)
	{
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		Task task = new Task("task 1", 22, 15.5f, ts, ts, 6, 4);
		task.setTaskId(1L);
		System.out.println(task);
		taskRepo.save(task);
		
		ts = new Timestamp(System.currentTimeMillis() + 86400000);
		task = new Task("task 2", 27, 12.5f, ts, ts, 8, 2);
		task.setTaskId(2L);
		System.out.println(task);
		taskRepo.save(task);
	}
	
}
