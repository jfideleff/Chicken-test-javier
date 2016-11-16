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
	
	@ManyToOne
	@JoinColumn(name="farmId")
	@JsonBackReference
	private Farm farm;
	
	@OneToMany(mappedBy="chicken",cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@Fetch(FetchMode.SUBSELECT)
	@JsonManagedReference
	private List<Egg> eggsList = new ArrayList<Egg>();
	
	public int countEggs(){
		int m = 0;
		m= eggsList.size();
		return m;
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

	public List<Egg> getEggsList() {
		return eggsList;
	}

	public void setEggsList(List<Egg> eggsList) {
		this.eggsList = eggsList;
	}

	public Chicken() {
	}
	
	

}
