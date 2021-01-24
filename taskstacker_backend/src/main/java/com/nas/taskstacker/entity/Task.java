package com.nas.taskstacker.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task
{
	@Id @GeneratedValue private  Long taskId;
	private String taskName;
	private Float durationHours;
	private Integer percentComplete;
	private Timestamp startDate;
	private Timestamp dueDate;
	private Integer perceivedImportance; 
	private Integer businessImportance;
	private String complete;
	
	public Task()
	{
		
	}
	
	public Task(String taskName, Float durationHours, Integer percentComplete, Timestamp startDate,
			Timestamp dueDate, Integer perceivedImportance, Integer businessImportance) {
		super();
		this.taskName = taskName;
		this.durationHours = durationHours;
		this.percentComplete = percentComplete;
		this.startDate = startDate;
		this.dueDate = dueDate;
		this.perceivedImportance = perceivedImportance;
		this.businessImportance = businessImportance;
	}
	public Long getTaskId() {
		return taskId;
	}
	public void setTaskId(Long taskId) {
		this.taskId = taskId;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public Float getDurationHours() {
		return durationHours;
	}
	public void setDurationHours(Float durationHours) {
		this.durationHours = durationHours;
	}
	public Integer getPercentComplete() {
		return percentComplete;
	}
	public void setPercentComplete(Integer percentComplete) {
		this.percentComplete = percentComplete;
	}
	public Timestamp getStartDate() {
		return startDate;
	}
	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}
	public Timestamp getDueDate() {
		return dueDate;
	}
	public void setDueDate(Timestamp dueDate) {
		this.dueDate = dueDate;
	}
	public Integer getPerceivedImportance() {
		return perceivedImportance;
	}
	public void setPerceivedIImportance(Integer perceivedImportance) {
		this.perceivedImportance = perceivedImportance;
	}
	public Integer getBusinessImportance() {
		return businessImportance;
	}
	public void setBusinessImportance(Integer businessImportance) {
		this.businessImportance = businessImportance;
	}
	
	public String getComplete() {
		return complete;
	}

	public void setComplete(String complete) {
		this.complete = complete;
	}

	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", taskName=" + taskName + ", durationHours=" + durationHours
				+ ", percentComplete=" + percentComplete + ", startDate=" + startDate + ", dueDate=" + dueDate
				+ ", perceivedImportance=" + perceivedImportance + ", businessImportance=" + businessImportance
				+ ", complete=" + complete + "]";
	}
	

}
