package com.nas.taskstacker.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nas.taskstacker.entity.Task;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RepositoryRestResource(collectionResourceRel = "tasks", path = "tasks")
public interface TaskRepo extends CrudRepository<Task, Long>
{

	//@Query("select t from Task t order by (t.managementImportance + t.businessImportance) desc" )
	@Query("select t from Task t" )
	public Iterable<Task> findTasksByPrio();
	
	
	@Query("select t from Task t where t.complete is null or t.complete != 'T'" )
	public Iterable<Task> findIncompleteTasks();
	
}
