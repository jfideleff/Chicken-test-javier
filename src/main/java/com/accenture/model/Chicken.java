package com.accenture.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;


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
	
	public static String addEgg(Chicken chic){
		long i = chic.getEggs();
		i++;
		chic.setEggs(i);
		return "A";
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
