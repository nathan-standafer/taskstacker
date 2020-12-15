package com.nas.taskstacker.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nas.taskstacker.entity.Task;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public interface TaskRepo extends CrudRepository<Task, Long>
{

}
