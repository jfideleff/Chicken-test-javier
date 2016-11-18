package com.accenture.test;

import static org.junit.Assert.*;

import org.junit.BeforeClass;

import com.accenture.model.Chicken;

public class Test {
	static Chicken chic;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		chic = new Chicken();
	}

	@org.junit.Test
	public void testAddEgg() {
		long result = (long) Chicken.addEgg(chic);
		long response = 1;
		assertEquals(response, result);
	}

}
