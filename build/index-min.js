var interval=500,end=!1,handle=$(".ui-slider-tooltip"),green=$(".ui-slider-range");let chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function rollResolved(e){end=!0,$(".roll_btn").text(e)}function generate_seed(){let e="";for(let n=0;n<40;n++)e+=chars.charAt(40*Math.random()+1);return e}function copy(){document.getElementById("referral-name").select(),document.execCommand("copy")}function rollProcessing(){end||(interval<100||(interval/=1.1),$(".roll_btn").text((94*Math.random()+2).toFixed()),setTimeout(rollProcessing,interval))}function winBet(e){$(".betBalance").text(e),$(".betBalance").addClass("winBalance"),setTimeout(function(){$(".betBalance").removeClass("winBalance")},1e3)}function lossBet(e){$(".betBalance").text(e),$(".betBalance").addClass("lossBalance"),setTimeout(function(){$(".betBalance").removeClass("lossBalance")},1e3)}function winEOS(e){$(".eosBalance").text(e),$(".eosBalance").addClass("winBalance"),setTimeout(function(){$(".eosBalance").removeClass("winBalance")},1e3)}function lossEOS(e){$(".eosBalance").text(e),$(".eosBalance").addClass("lossBalance"),setTimeout(function(){$(".eosBalance").removeClass("lossBalance")},1e3)}$("#slider").slider({value:50,max:103,min:-3,step:1,slide:function(e,n){if(n.value<2||n.value>96)return!1;handle.text(n.value),green.css("right",97-n.value/106*100+"%")}}),$(".fairness-seed").html(generate_seed()),$(".referral-btn").on("click",copy),$(".roll_btn").on("click",function(){interval=500,end=!1,setTimeout(rollProcessing,interval)}),setTimeout(function(){$(".alert").removeClass("hide"),$(".alert").addClass("show"),lossEOS("-0.0001"),winBet("0.0001")},5e3);