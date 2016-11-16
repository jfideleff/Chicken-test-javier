package com.accenture.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name="Farm")
public class Farm {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@Column(name="nameF")
	private String nameF;
	
	@OneToMany(mappedBy="farm", fetch=FetchType.EAGER, cascade=CascadeType.REMOVE)
	@JsonManagedReference
	private List<Chicken> chickenList =new ArrayList();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNameF() {
		return nameF;
	}

	public void setName(String nameF) {
		this.nameF = nameF;
	}

	public List<Chicken> getChickenList() {
		return chickenList;
	}

	public void setChickenList(List<Chicken> chickenList) {
		this.chickenList = chickenList;
	}

	public void setNameF(String nameF) {
		this.nameF = nameF;
	}

	public Farm() {
		
	}
	
	

}
