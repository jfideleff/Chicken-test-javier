package com.accenture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.dao.ChickenDao;
import com.accenture.dao.FarmDao;
import com.accenture.model.Chicken;
import com.accenture.model.Farm;

@RestController
public class infoController {
	
	@Autowired
	ChickenDao chickenDao;
	
	@Autowired
	FarmDao farmDao;
	
	@RequestMapping(path="/view/getFarm/{id}",method=RequestMethod.GET)
	public List<Chicken> getChick(@PathVariable("id")String id){
		Farm farm = farmDao.getFarm(Long.parseLong(id));
		List<Chicken> list = farm.getChickenList();
		return list;
	}
	
	@RequestMapping(path="/view/addChicken/{id}", method=RequestMethod.POST)
	public Chicken postChicken(@PathVariable("id") String id,Chicken chicken){
		Farm farm = farmDao.getFarm(Long.parseLong(id));
		chicken.setFarm(farm);
		chickenDao.addFarm(chicken);
		return chicken;
	}
	
	@RequestMapping(path="/view/deleteChicken/{id}", method=RequestMethod.DELETE)
	public void deleteChicken(@PathVariable("id") String id){
		Chicken chicken= chickenDao.getChicken(Long.parseLong(id));
		chickenDao.deleteFarm(chicken);
	}
	
	@RequestMapping(path="/view/addEgg/{id}", method=RequestMethod.PUT, headers = "Accept=application/json")
	public Chicken addEgg(@PathVariable("id") String id,@RequestBody Chicken chicken){
		Farm farm = farmDao.getFarm(Long.parseLong(id));
		Chicken.addEgg(chicken);
		chicken.setFarm(farm);
		chickenDao.updateFarm(chicken);
		return chicken;
	}

}
