package com.nas.taskstacker.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class IndexController {

	//@RequestMapping(value ={"/tasks", "/tasks/*"}, method = RequestMethod.GET)
	public void handleGet(HttpServletRequest request, HttpServletResponse response) {
		String location = "http://" + request.getServerName() + ":" + request.getServerPort();
		System.out.println("redirect location: " + location);
		
		response.setHeader("Location", location);
	    response.setStatus(302);
	}
	
}
