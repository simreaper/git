package com.URL;

import java.io.*;
import java.net.*;

public class URLConnectionExample {
	public static void main(String[] args) {
		try {
			URL url = new URL("https://www.geeksforgeeks.org/java");
			URLConnection urlcon = url.openConnection();
			BufferedReader br = new BufferedReader(new InputStreamReader(urlcon.getInputStream()));
			String i;
 
			while ((i = br.readLine()) != null) {
				System.out.println(i);
			}
		}

		catch (Exception e) {
			System.out.println(e);
		}
	}
}
