package com.accenture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.accenture.dao.FarmDao;
import com.accenture.model.Farm;

@RestController
public class FarmController {
	
	@Autowired
	FarmDao farmDao;
	
	@RequestMapping(path="/view/farmList", method=RequestMethod.GET)
	public List<Farm> getFarm(){
		List<Farm> list = farmDao.ListFarm();
		return list;
	}
	
	@RequestMapping(path="/view/addFarm", method=RequestMethod.POST)
	public Farm postFarm(Farm farm){
		farmDao.addFarm(farm);
		return farm;
	}
	
	@RequestMapping(path="/view/deleteFarm/{id}", method=RequestMethod.DELETE)
	public void deleteFarm(@PathVariable("id") String id){
		Farm farm = farmDao.getFarm(Long.parseLong(id));
		farmDao.deleteFarm(farm);
	}
	
	@RequestMapping(path="/view/editFarm/{id}", method=RequestMethod.PUT, headers = "Accept=application/json")
	public Farm putFarm(@RequestBody Farm farm){
		farmDao.updateFarm(farm);
		return farm;
	}

}
