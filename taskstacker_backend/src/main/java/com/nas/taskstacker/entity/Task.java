package com.nas.taskstacker.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task
{
	private @Id @GeneratedValue Long taskId;
	private String taskName;
	private Integer durationHours;
	private Float percentComplete;
	private Timestamp startDate;
	private Timestamp dueDate;
	private Integer managementImportance;
	private Integer businessImportance;
	
	public Task()
	{
		
	}
	
	public Task(String taskName, Integer durationHours, Float percentComplete, Timestamp startDate,
			Timestamp dueDate, Integer managementImportance, Integer businessImportance) {
		super();
		this.taskName = taskName;
		this.durationHours = durationHours;
		this.percentComplete = percentComplete;
		this.startDate = startDate;
		this.dueDate = dueDate;
		this.managementImportance = managementImportance;
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
	public Integer getDurationHours() {
		return durationHours;
	}
	public void setDurationHours(Integer durationHours) {
		this.durationHours = durationHours;
	}
	public Float getPercentComplete() {
		return percentComplete;
	}
	public void setPercentComplete(Float percentComplete) {
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
	public Integer getManagementImportance() {
		return managementImportance;
	}
	public void setManagementImportance(Integer managementImportance) {
		this.managementImportance = managementImportance;
	}
	public Integer getBusinessImportance() {
		return businessImportance;
	}
	public void setBusinessImportance(Integer businessImportance) {
		this.businessImportance = businessImportance;
	}
	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", taskName=" + taskName + ", durationHours=" + durationHours
				+ ", percentComplete=" + percentComplete + ", startDate=" + startDate + ", dueDate=" + dueDate
				+ ", managementImportance=" + managementImportance + ", businessImportance=" + businessImportance + "]";
	}
	

}
