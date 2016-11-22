package com.accenture.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.accenture.dao.FarmDao;
import com.accenture.model.Farm;

@Controller
public class SharedController {
	
	@Autowired
	FarmDao farmDao;
	
	@RequestMapping("/")
	public String Index(){
		return "index";
	}
	
	@RequestMapping("/info/{id}")
	public ModelAndView Info(@PathVariable("id") String id){
		Farm farm = farmDao.getFarm(Long.parseLong(id));
		ModelAndView m = new ModelAndView("/info");
		m.addObject("farm", farm);
		return m;
	}
	
	

}
