var g_data = {"4":{"pr":"/tb_coincol/DUT","t":"inst","br":[{"bs":[{"s":"         if(reset)\r","f":2,"i":1,"l":57,"h":3},{"s":"	 else\r","f":2,"i":1,"l":59,"h":9}],"br":{"s":"         if(reset)\r","f":2,"l":57,"i":1,"p":100.00}},{"bs":[{"s":"	   STATE00 : \r","f":2,"i":1,"l":67,"h":10},{"s":"	   STATE25 :\r","f":2,"i":1,"l":78,"h":3},{"s":"	   STATE50 :\r","f":2,"i":1,"l":89,"h":6},{"s":"	   STATE75 :\r","f":2,"i":1,"l":98,"h":3},{"s":"	   default :   nextstate = STATE00;\r","f":2,"i":1,"l":105,"h":9}],"br":{"s":"	case(prestate)\r","f":2,"l":66,"i":1,"p":100.00}},{"bs":[{"s":"	   	          if(coin_in == 2'b00)\r","f":2,"i":1,"l":69,"h":1},{"s":"	                  else if(coin_in == 2'b01)\r","f":2,"i":1,"l":71,"h":1},{"s":"	   	          else if(coin_in == 2'b10)\r","f":2,"i":1,"l":73,"h":1},{"s":"	                  else\r","f":2,"i":1,"l":75,"h":7}],"br":{"s":"	   	          if(coin_in == 2'b00)\r","f":2,"l":69,"i":1,"p":100.00}},{"bs":[{"s":"	    	          if(coin_in == 2'b00)\r","f":2,"i":1,"l":80,"h":2},{"s":"	                  else if(coin_in == 2'b01)\r","f":2,"i":1,"l":82,"h":0},{"s":"	                  else if(coin_in == 2'b10)\r","f":2,"i":1,"l":84,"h":0},{"s":"	                  else\r","f":2,"i":1,"l":86,"h":1}],"br":{"s":"	    	          if(coin_in == 2'b00)\r","f":2,"l":80,"i":1,"p":50.00}},{"bs":[{"s":"	   	          if(coin_in == 2'b00)\r","f":2,"i":1,"l":91,"h":2},{"s":"	   	          else if(coin_in == 2'b01 || coin_in == 2'b10)                              \r","f":2,"i":1,"l":93,"h":2},{"s":"	   	          else\r","f":2,"i":1,"l":95,"h":2}],"br":{"s":"	   	          if(coin_in == 2'b00)\r","f":2,"l":91,"i":1,"p":100.00}},{"bs":[{"s":"	                  if(coin_in == 2'b00 || coin_in == 2'b01 || coin_in == 2'b10)                              \r","f":2,"i":1,"l":100,"h":2},{"s":"	                  else\r","f":2,"i":1,"l":102,"h":1}],"br":{"s":"	                  if(coin_in == 2'b00 || coin_in == 2'b01 || coin_in == 2'b10)                              \r","f":2,"l":100,"i":1,"p":100.00}},{"bs":[{"s":"            STATE25  : \r","f":2,"i":1,"l":133,"h":1},{"s":"	    STATE50  : \r","f":2,"i":1,"l":138,"h":2},{"s":"	    STATE75  : \r","f":2,"i":1,"l":143,"h":1},{"s":"	    STATE100 : \r","f":2,"i":1,"l":148,"h":3},{"s":"	    default  : \r","f":2,"i":1,"l":153,"h":4}],"br":{"s":"         case(prestate)\r","f":2,"l":132,"i":1,"p":100.00}}]},"3":{"pr":"/tb_coincol","t":"inst","br":[{"bs":[{"s":"	 if(done !== 1'b0 || lsb7seg !== 7'b1000000 ||msb7seg !== 7'b1000000)\r","f":1,"i":1,"l":67,"h":0},{"s":"All False","f":1,"i":1,"l":67,"h":3}],"br":{"s":"	 if(done !== 1'b0 || lsb7seg !== 7'b1000000 ||msb7seg !== 7'b1000000)\r","f":1,"l":67,"i":1,"p":50.00}},{"bs":[{"s":"	 if(coin == 2'b00)\r","f":1,"i":1,"l":86,"h":4},{"s":" 	 else if(coin == 2'b01)\r","f":1,"i":1,"l":88,"h":2},{"s":"	 else if(coin == 2'b10)\r","f":1,"i":1,"l":90,"h":1},{"s":"	 else if(coin == 2'b11)\r","f":1,"i":1,"l":92,"h":0},{"s":"All False","f":1,"i":1,"l":86,"h":0}],"br":{"s":"	 if(coin == 2'b00)\r","f":1,"l":86,"i":1,"p":60.00}},{"bs":[{"s":"	    PAISE25 :\r","f":1,"i":1,"l":99,"h":1},{"s":"	    PAISE50 :\r","f":1,"i":1,"l":110,"h":2},{"s":"	    PAISE75 :\r","f":1,"i":1,"l":121,"h":1},{"s":"	    RUPEE1  :\r","f":1,"i":1,"l":132,"h":3},{"s":"	    NOCOIN  :\r","f":1,"i":1,"l":143,"h":0},{"s":"	    default :  //Covers the amounts 125, 150 ans 175 \r","f":1,"i":1,"l":146,"h":0}],"br":{"s":"	 case(coin_sum)\r","f":1,"l":98,"i":1,"p":66.66}},{"bs":[{"s":"	      		  if(done !== 1'b0 ||lsb7seg !== 7'b0100100 ||msb7seg !== 7'b0010100)\r","f":1,"i":1,"l":101,"h":0},{"s":"All False","f":1,"i":1,"l":101,"h":1}],"br":{"s":"	      		  if(done !== 1'b0 ||lsb7seg !== 7'b0100100 ||msb7seg !== 7'b0010100)\r","f":1,"l":101,"i":1,"p":50.00}},{"bs":[{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b0100010 ||msb7seg !== 7'b1000000)\r","f":1,"i":1,"l":112,"h":0},{"s":"All False","f":1,"i":1,"l":112,"h":2}],"br":{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b0100010 ||msb7seg !== 7'b1000000)\r","f":1,"l":112,"i":1,"p":50.00}},{"bs":[{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b1111000 ||msb7seg !== 7'b0010010)\r","f":1,"i":1,"l":123,"h":0},{"s":"All False","f":1,"i":1,"l":123,"h":1}],"br":{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b1111000 ||msb7seg !== 7'b0010010)\r","f":1,"l":123,"i":1,"p":50.00}},{"bs":[{"s":"	                  if(done !== 1'b1 || lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"i":1,"l":134,"h":0},{"s":"All False","f":1,"i":1,"l":134,"h":3}],"br":{"s":"	                  if(done !== 1'b1 || lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"l":134,"i":1,"p":50.00}},{"bs":[{"s":"		          if(done !== 1'b1 ||lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"i":1,"l":148,"h":0},{"s":"All False","f":1,"i":1,"l":148,"h":0}],"br":{"s":"		          if(done !== 1'b1 ||lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"l":148,"i":1,"p":0.00}}]},"1":{"pr":"work.tb_coincol","t":"du","br":[{"bs":[{"s":"	 if(done !== 1'b0 || lsb7seg !== 7'b1000000 ||msb7seg !== 7'b1000000)\r","f":1,"i":1,"l":67,"h":0},{"s":"All False","f":1,"i":1,"l":67,"h":3}],"br":{"s":"	 if(done !== 1'b0 || lsb7seg !== 7'b1000000 ||msb7seg !== 7'b1000000)\r","f":1,"l":67,"i":1,"p":50.00}},{"bs":[{"s":"	 if(coin == 2'b00)\r","f":1,"i":1,"l":86,"h":4},{"s":" 	 else if(coin == 2'b01)\r","f":1,"i":1,"l":88,"h":2},{"s":"	 else if(coin == 2'b10)\r","f":1,"i":1,"l":90,"h":1},{"s":"	 else if(coin == 2'b11)\r","f":1,"i":1,"l":92,"h":0},{"s":"All False","f":1,"i":1,"l":86,"h":0}],"br":{"s":"	 if(coin == 2'b00)\r","f":1,"l":86,"i":1,"p":60.00}},{"bs":[{"s":"	    PAISE25 :\r","f":1,"i":1,"l":99,"h":1},{"s":"	    PAISE50 :\r","f":1,"i":1,"l":110,"h":2},{"s":"	    PAISE75 :\r","f":1,"i":1,"l":121,"h":1},{"s":"	    RUPEE1  :\r","f":1,"i":1,"l":132,"h":3},{"s":"	    NOCOIN  :\r","f":1,"i":1,"l":143,"h":0},{"s":"	    default :  //Covers the amounts 125, 150 ans 175 \r","f":1,"i":1,"l":146,"h":0}],"br":{"s":"	 case(coin_sum)\r","f":1,"l":98,"i":1,"p":66.66}},{"bs":[{"s":"	      		  if(done !== 1'b0 ||lsb7seg !== 7'b0100100 ||msb7seg !== 7'b0010100)\r","f":1,"i":1,"l":101,"h":0},{"s":"All False","f":1,"i":1,"l":101,"h":1}],"br":{"s":"	      		  if(done !== 1'b0 ||lsb7seg !== 7'b0100100 ||msb7seg !== 7'b0010100)\r","f":1,"l":101,"i":1,"p":50.00}},{"bs":[{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b0100010 ||msb7seg !== 7'b1000000)\r","f":1,"i":1,"l":112,"h":0},{"s":"All False","f":1,"i":1,"l":112,"h":2}],"br":{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b0100010 ||msb7seg !== 7'b1000000)\r","f":1,"l":112,"i":1,"p":50.00}},{"bs":[{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b1111000 ||msb7seg !== 7'b0010010)\r","f":1,"i":1,"l":123,"h":0},{"s":"All False","f":1,"i":1,"l":123,"h":1}],"br":{"s":"	                  if(done !== 1'b0 ||lsb7seg !== 7'b1111000 ||msb7seg !== 7'b0010010)\r","f":1,"l":123,"i":1,"p":50.00}},{"bs":[{"s":"	                  if(done !== 1'b1 || lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"i":1,"l":134,"h":0},{"s":"All False","f":1,"i":1,"l":134,"h":3}],"br":{"s":"	                  if(done !== 1'b1 || lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"l":134,"i":1,"p":50.00}},{"bs":[{"s":"		          if(done !== 1'b1 ||lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"i":1,"l":148,"h":0},{"s":"All False","f":1,"i":1,"l":148,"h":0}],"br":{"s":"		          if(done !== 1'b1 ||lsb7seg !== 7'b0001001 ||msb7seg !== 7'b0001000)\r","f":1,"l":148,"i":1,"p":0.00}}]}};
processBranchesData(g_data);