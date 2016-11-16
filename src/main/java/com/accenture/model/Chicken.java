package com.accenture.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name="Chicken")
public class Chicken {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@Column(name="eggs")
	private long eggs;
	
	@ManyToOne
	@JoinColumn(name="farmId")
	@JsonBackReference
	private Farm farm;
	
	public static void addEgg(Chicken chic){
		long i = chic.getEggs();
		i++;
		chic.setEggs(i);
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Farm getFarm() {
		return farm;
	}

	public void setFarm(Farm farm) {
		this.farm = farm;
	}

	public long getEggs() {
		return eggs;
	}

	public void setEggs(long eggs) {
		this.eggs = eggs;
	}

	public Chicken() {
	}
	
	

}
