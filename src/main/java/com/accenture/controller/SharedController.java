package com.accenture.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SharedController {
	
	
	@RequestMapping("/")
	public String Index(){
		return "index";
	}
	
	@RequestMapping("/info/{id}")
	public String Info(){
		return "info";
	}
	
	

}
