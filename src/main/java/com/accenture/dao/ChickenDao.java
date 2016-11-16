package com.accenture.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.accenture.model.Chicken;


public class ChickenDao {
	
	@Autowired
	SessionFactory sessionFactory;
	
	@Transactional
	public Chicken getChicken(Long id) {
		Session session = sessionFactory.openSession();
		Chicken chicken = session.get(Chicken.class, id);
		session.close();
		return chicken;
	}
	
	public List<Chicken> ListChicken()
	{
		Session session = sessionFactory.openSession();
		@SuppressWarnings("unchecked")
		List<Chicken> chickenList = session.createQuery("from Chicken").list();
		session.close();
		return chickenList;
	}
	
	public List<Chicken> critChicken(){
		Session session = sessionFactory.openSession();
		Criteria cr = session.createCriteria(Chicken.class);
		List<Chicken> result = cr.list();
		session.close();
		return result;
	}
	
	@Transactional
	public void addFarm(Chicken chicken) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(chicken);
		tx.commit();
		session.close();
	}
	
	@Transactional
	public void updateFarm(Chicken chicken) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.update(chicken);
		tx.commit();
		session.close();		
	}
	
	@Transactional
	public void deleteFarm(Chicken chicken){
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.delete(chicken);
		tx.commit();
		session.close();
	}
}
