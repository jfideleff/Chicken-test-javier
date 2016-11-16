package com.accenture.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.accenture.dao.ChickenDao;
import com.accenture.dao.FarmDao;
import com.accenture.model.Chicken;
import com.accenture.model.Farm;

@Controller
@RequestMapping("/Chicken")
public class ChickenController {
	
	@Autowired
	ChickenDao chickenDao;
	
	@Autowired
	FarmDao farmDao;
	
	@RequestMapping("List/{id}")
	public ModelAndView List(@PathVariable("id") String id){
		Farm farm = null;
		farm=farmDao.getFarm(Long.parseLong(id));
		List<Chicken> list = farm.getChickenList();
		ModelAndView m = new ModelAndView("Chicken/List");
		m.addObject("list", list);
		m.addObject("farm", farm);
		return m;
	}
	
	@RequestMapping("Delete/{id}")
	public String deleteChicken(@PathVariable("id") String id){
		Chicken chicken = null;
		chicken = chickenDao.getChicken(Long.parseLong(id));
		chickenDao.deleteFarm(chicken);
		return "redirect:../../Farm/";
	}
	
	@RequestMapping("NewChicken/{id}")
	public ModelAndView NewChicken(@PathVariable("id") String id){
		Farm farm = null;
		farm=farmDao.getFarm(Long.parseLong(id));
		ModelAndView m = new ModelAndView("Chicken/NewChicken");
		m.addObject("newChicken", new Chicken());
		m.addObject("farm", farm);
		return m;
	}
	
	@RequestMapping(path="NewChicken", method=RequestMethod.POST)
	public String CreateFarm(@ModelAttribute("newChicken")Chicken chicken){
		chickenDao.addFarm(chicken);
		return "redirect:../Chicken/List/"+chicken.getFarm().getId();
	}

}
