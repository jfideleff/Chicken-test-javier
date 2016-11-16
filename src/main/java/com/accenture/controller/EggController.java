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
import com.accenture.dao.EggDao;
import com.accenture.model.Chicken;
import com.accenture.model.Egg;
import com.accenture.model.Farm;

@Controller
@RequestMapping("/Egg")
public class EggController {
	
	@Autowired
	ChickenDao chickenDao;
	
	@Autowired
	EggDao eggDao;
	
	@RequestMapping("List/{id}")
	public ModelAndView ListEgg(@PathVariable("id") String id){
		Chicken chicken = null;
		chicken=chickenDao.getChicken(Long.parseLong(id));
		ModelAndView m = new ModelAndView("Egg/List");
		List<Egg> list = chicken.getEggsList();
		m.addObject("chicken", chicken);
		m.addObject("list", list);
		return m;
	}
	
	@RequestMapping("NewEgg/{id}")
	public ModelAndView NewEgg(@PathVariable("id") String id){
		Chicken chicken = null;
		chicken=chickenDao.getChicken(Long.parseLong(id));
		ModelAndView m = new ModelAndView("Egg/NewEgg");
		m.addObject("newEgg", new Egg());
		m.addObject("chicken", chicken);
		return m;
	}
	
	@RequestMapping(path="NewEgg", method=RequestMethod.POST)
	public String CreateEgg(@ModelAttribute("newEgg")Egg egg){
		eggDao.addFarm(egg);
		return "redirect:../Egg/List/"+egg.getChicken().getId();
	}
	
	@RequestMapping("EditEgg/{id}")
	public ModelAndView EditEgg(@PathVariable("id") String id){
		ModelAndView m = new ModelAndView("Egg/EditEgg");
		m.addObject("egg", eggDao.getFarm(Long.parseLong(id)));
		return m;
	}
	
	@RequestMapping(path="EditEgg", method=RequestMethod.POST)
	public String UpdateEgg(@ModelAttribute("egg") Egg egg){
		eggDao.updateFarm(egg);
		return "redirect:../Egg/List/"+egg.getChicken().getId();
	}
}
