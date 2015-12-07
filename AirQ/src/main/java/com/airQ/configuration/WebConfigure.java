package com.airQ.configuration;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.boot.context.embedded.ServletContextInitializer;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfigure implements ServletContextInitializer {

	private void initH2Console(ServletContext servletContext) {
		ServletRegistration.Dynamic h2ConsoleServlet = servletContext.addServlet("H2Console",
				new org.h2.server.web.WebServlet());
		h2ConsoleServlet.addMapping("/console/*");
		h2ConsoleServlet.setInitParameter("-properties", "src/main/resources");
		h2ConsoleServlet.setLoadOnStartup(1);
	}

	@Override
	public void onStartup(ServletContext arg0) throws ServletException {
		initH2Console(arg0);
	}
}