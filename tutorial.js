var company = [{
			name: 'Google',
			type: 'Product'
		}, {
			name: 'Microsoft',
			type: 'Product'
		}, {
			name: 'Congnizant',
			type: 'Services'
		}, {
			name: 'Accenture',
			type: 'Services'
		}, {
			name: 'HP',
			type: 'Product'
		}, {
			name: 'Wipro',
			type: 'Services'
		}
		]

	var isProduct = function(company) { 
			return company.type==='Product';
		};
		var isService = function(company) {
			return company.type==='Services';
		};
		var clickedProduct = false;
		var clickedServices = false;
		var product = company.filter(isProduct);
		 var services = company.filter(isService);
		
		
		$(document).ready(function(){
			
			$("#para").dialog(function(){
				autoOpen:false;
				
				
			});
			
			
			$("#buttonC").click(function(){
				$("#para").dialog("open");
			$("#para").empty();
		
			//if(clickedProduct == false){
				
				for(var i=0;i<product.length;i++){
					$("#para").append(product[i].name+" ");
					$("#para").css("visibility","visible");
					$("#para").css("background","red");
				}
			//}
				clickedProduct = true;
			})
		$("#buttonD").click(function(){
			
			//if(clickedServices == false){
			$("#para").empty();
				for(var i=0;i<services.length;i++){
					
					$("#para").append(services[i].name+" ");
					$("#para").css("visibility","visible");
					$("#para").css("background","lightblue");
					$("#para").css("width","120px");
				}
			//}
				clickedServices = true;
			})
		})
		//document.writeln(services);