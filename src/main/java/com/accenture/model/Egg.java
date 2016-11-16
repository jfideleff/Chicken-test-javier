package com.accenture.model;

import javax.persistence.*;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="Egg")
public class Egg {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@Column(name="size")
	private String eggSize;
	
	@ManyToOne
	@JoinColumn(name="chickenId")
	@JsonBackReference
	private Chicken chicken;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Chicken getChicken() {
		return chicken;
	}

	public void setChicken(Chicken chicken) {
		this.chicken = chicken;
	}

	public Egg() {
	}

	public String getEggSize() {
		return eggSize;
	}

	public void setEggSize(String eggSize) {
		this.eggSize = eggSize;
	}

	
	
	

}
