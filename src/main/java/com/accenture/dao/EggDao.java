package com.accenture.dao;

import java.util.List;



import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.accenture.model.Egg;

public class EggDao {
	
	@Autowired
	SessionFactory sessionFactory;
	
	@Transactional
	public Egg getFarm(Long id) {
		Session session = sessionFactory.openSession();
		Egg egg = session.get(Egg.class, id);
		session.close();
		return egg;
	}
	
	public List<Egg> ListEgg()
	{
		Session session = sessionFactory.openSession();
		@SuppressWarnings("unchecked")
		List<Egg> eggList = session.createQuery("from Egg").list();
		session.close();
		return eggList;
	}
	
	@Transactional
	public void addFarm(Egg egg) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(egg);
		tx.commit();
		session.close();
	}
	
	@Transactional
	public void updateFarm(Egg egg) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.update(egg);
		tx.commit();
		session.close();		
	}
	
	@Transactional
	public void deleteFarm(Egg egg){
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.delete(egg);
		tx.commit();
		session.close();
	}
}
