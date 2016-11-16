package com.accenture.dao;

import java.util.List;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.accenture.model.Farm;

public class FarmDao {
	
	@Autowired
	SessionFactory sessionFactory;
	
	@Transactional
	public Farm getFarm(Long id) {
		Session session = sessionFactory.openSession();
		Farm far = session.get(Farm.class, id);
		session.close();
		return far;
	}
	
	public List<Farm> ListFarm()
	{
		Session session = sessionFactory.openSession();
		List<Farm> farmList = session.createQuery("from Farm").list();
		session.close();
		return farmList;
	}
	
	@Transactional
	public void addFarm(Farm farm) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(farm);
		tx.commit();
		session.close();
	}
	
	@Transactional
	public void updateFarm(Farm farm) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.update(farm);
		tx.commit();
		session.close();		
	}
	
	@Transactional
	public void deleteFarm(Farm farm){
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.delete(farm);
		tx.commit();
		session.close();
	}
}
