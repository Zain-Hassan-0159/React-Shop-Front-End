<?php
// Template name: Inside Form

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package OnePress
 */

get_header();

$layout = onepress_get_layout();

/**
 * @since 2.0.0
 * @see onepress_display_page_title
 */


?>

<!-- FORM DESIGN TO GO HERE. -->
<!-- CSS file to use is style.css in this directory -->
<!--<br>-->
<!--<br>-->
<!--<br>-->
<!--<br>-->
<!--<br>-->
<!--<br>-->
<!--<p>FORM DESIGN HEREs</p>-->
<!-- MAIN BANNER -->

 <link href="<?php echo site_url()?>/wp-content/themes/onepress-child/css/formpage.css" rel="stylesheet">
<script src="<?php echo site_url()?>/wp-content/themes/onepress-child/js/jquery.min.js"></script>

<script src="<?php echo site_url()?>/wp-content/themes/onepress-child/js/jquery.validate.min.js"></script>
<script src="<?php echo site_url()?>/wp-content/themes/onepress-child/js/pagefunction.js"></script>


<?php

        if ( isset( $_POST['submit'] ) ){
        global $wpdb;
            $table = 'debt_data';
            $data = array(
                'DebtID'    => '',
				'LastName'    => $_POST['last_name'],
				'FirstName'    => $_POST['first_name'],
				'email'    => $_POST['email'],
				'telephone'    => $_POST['phone'],
				'points'    => '',
				'percentage'    => '',
				'q01'    => $_GET['q01'],
				'q02'    => $_GET['q02'],
				'q03'    => $_GET['q03'],
				'q04'    => $_GET['q04'],
				'q05'    => $_GET['q05'],
				'q06'    => $_GET['q06'],
				'q07'    => $_GET['q07'],
				
            );
			
			
            $format = array(
                '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s'
            );
          //   window.location.href = '../abovedebt/index.php/inside-form-q1/?'+$(this).attr('id')+'='+$(this).attr('value');
            $success=$wpdb->insert( $table, $data, $format );
			$lastid = $wpdb->insert_id;
			
			   $intLeadGroupID=54773;			   
			   $strLeadFirstName=$_POST['first_name'];
			   $strLeadLastName=$_POST['last_name'];
			   $strLeadPhone1=$_POST['phone'];
			   $strLeadEmail=$_POST['email'];
			   $strLeadAddress=$_GET['q03'];
			   $strLeadData1=$_GET['q01'];
			   $strLeadData2=$_GET['q07'];
			   $strLeadData4=$_GET['q02'].','.$_GET['q04'].','.$_GET['q05'].','.$_GET['q06'];
			   $intDPAStatusPhoneID=1;
			   $intDPAStatusSMSID=1;
			   $intDPAStatusMailID=1;
			   $intDPAStatusFaxID=1;
  
  
				$url = 'https://financialempowerment.flg360.co.uk/api/APIHTTPPost.php?intLeadGroupID='. $intLeadGroupID .				
				'&strLeadFirstName='. $strLeadFirstName .
				'&strLeadLastName='. $strLeadLastName .
				'&strLeadPhone1='. $strLeadPhone1 .
				'&strLeadEmail='. $strLeadEmail .
				'&strLeadAddress='. $strLeadAddress .
				'&intDPAStatusPhoneID='. $intDPAStatusPhoneID .
				'&intDPAStatusSMSID='. $intDPAStatusSMSID .
				'&intDPAStatusEmailID=1'.
				'&intDPAStatusMailID='. $intDPAStatusMailID .
				'&intDPAStatusFaxID='. $intDPAStatusFaxID .
				'&strLeadData1='. $strLeadData1 .
				'&strLeadData2='. $strLeadData2 .
				'&strLeadData4='. $strLeadData4;
				
        function get_content($URL){
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($ch, CURLOPT_URL, $URL);
                    $data = curl_exec($ch);
                    curl_close($ch);
                    return $data;
              }
              
				
				$webresponse=json_encode(get_content($url));
			  			
            if($success){
				 if($webresponse!='false'){
					echo '<script type="text/javascript">
							//var url = window.location.hostname+"index.php/thank-you/?user_id='.$lastid.'";
							//window.location = url;
							window.location.href ="index.php/thank-you/?user_id='.$lastid.'";
						</script>';
				 }else{
					 
					 echo '<script type="text/javascript">
						var url = "index.php";
						window.location.href = url;
					</script>';
					 
				 }
			}
			else{
				echo '<script type="text/javascript">
						var url = "index.php";
						window.location.href = url;
					</script>';
			}
			
		}
		else   { ?>
<div class="main-banner">
  <div class="main-banner__content-inside">
  <div class="row qualify-container-head">
    <div class="col-lg-12">
        <h2 class="qu-txt">Good news!</h2>
        <h2 class="qu-txt">We can help write off unaffordable debt</h2>
        
	</div>
  </div>
	
   <div class="qualify-container">
   <div class="container">
       <div class="row">
           
           
           <!-- LEFT -->
           <div class="col-lg-6 col-md-12 ty-form-left">
               <div class="d-flex align-items-center">
                   <div class="quiz-end__step-num">1</div>
                   <div class="quiz-end__step-text"> 
                    <strong>Good news</strong>, we can help write off unaffordable debt
                   </div>
                </div>
               <div class="debt-info">               
              <p><strong>Based on your debt of <?php echo $_GET['q01'] ?>,</strong> split between <?php echo $_GET['q02'] ?> creditors, we have identified <strong>3 plans</strong> to tackle your debt.</p>
            <p><strong>One of these options may be able to write-off up to 81% of your debt.</strong></p>
               </div>
           </div>
           <!-- end LEFT -->
           
           <!-- RIGHT -->           
           <div class="col-lg-6 col-md-12 ty-form-right">
               <div class="d-flex align-items-center">
                   <div class="quiz-end__step-num">2</div>
                   <div class="quiz-end__step-text"> 
                    <strong>Let's get started!</strong>
                   </div>
                </div>
               <div class="debt-info">               
               <p style="color: black !important;">We have identified <strong>three plans</strong> that could help save you thousands on the debt you owe.</p><p style="color: black !important;"> To access your results, please complete the form below and an experienced advisor will call to discuss your options, including the possibility to <strong>write off up to 81% of your debt</strong> and potentially reduce repayments to just <strong>£20 per week</strong>.</p>
                   
                    <form action=" " class="quiz-form" method="post">                                     
					<div class="form-group">
						<label for="first_name">Your First Name</label>
					   
						 <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" >
					  </div>
					  <div class="form-group">
						<label for="last_name">Your Last Name</label>
						<input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name">
					  </div>
					  
					  <div class="form-group">
						<label for="email">Your Email address</label>
						<input type="text" class="form-control" name="email" id="email" placeholder="name@company.com" >
					  </div>
					  <div class="form-group">
						<label for="phone">Your Telephone Number</label>
						<input type="text" class="form-control" name="phone" id="phone" placeholder="E.g +44 7847986462">
					  </div>
                           
                        <div class="quiz-form__btn">
                           <button id="gethelp" type="submit" name="submit" class="btn btn--arrow btn-green">GET DEBT HELP</button>
                           
                        </div>

                        <input type="hidden" id="q01" name="q01" value="<?php echo $_GET['q01'] ?> ">
                        <input type="hidden" id="q02" name="q02" value="<?php echo $_GET['q02'] ?> ">
                        <input type="hidden" id="q03" name="q03" value="<?php echo $_GET['q03'] ?>  ">
                        <input type="hidden" id="q04" name="q04" value="<?php echo $_GET['q04'] ?> ">
                        <input type="hidden" id="q05" name="q05" value="<?php echo $_GET['q05'] ?> "> <!-- push ls value here -->
                        <input type="hidden" id="q06 " name="q06 " value="<?php echo $_GET['q05'] ?> ">
                        <input type="hidden" id="q07 " name="q07 " value="<?php echo $_GET['q07'] ?> ">
                        
                     </form>
                   
                   
               </div>               
           </div>
           <!-- end RIGHT -->
           
           <!-- old form -->
           <!--              
                  <div class="quiz-end__side col-lg-6">
                     <div class="quiz-end__side-top">
                        <div class="quiz-end__step">
                           <div class="quiz-end__step-num">1</div>
                           <div class="quiz-end__step-text"> 
                                                           <strong>Good news</strong>, we can help write off unaffordable debt
                                                      </div>
                        </div>

                                                        <p><strong>Based on your debt of <?php //echo $_GET['q01'] ?>,</strong> split between <?php //echo $_GET['q02'] ?> creditors, we have identified <strong>3 plans</strong> to tackle your debt.</p>
                                                        <p><strong>One of these options may be able to write-off up to 81% of your debt.</strong></p>
                                                 </div>
                     <div class="quiz-end__side-bottom">
                       

                        
                     </div>
                  </div>
                  <div class="quiz-end__main col-lg-6">
                    <div class="quiz-end__step">
                        <div class="quiz-end__step-num">2</div>
                        <div class="quiz-end__step-text">Let's get started</div>
                    </div>
					

                     <form action=" " class="quiz-form" method="post">
                        <p style="color: black !important;">We have identified <strong>three plans</strong> that could help save you thousands on the debt you owe.</p><p style="color: black !important;"> To access your results, please complete the form below and an experienced advisor will call to discuss your options, including the possibility to <strong>write off up to 81% of your debt</strong> and potentially reduce repayments to just <strong>£20 per week</strong>.</p>
                                                
					<div class="form-group">
						<label for="first_name">Your First Name</label>
					   
						 <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" >
					  </div>
					  <div class="form-group">
						<label for="last_name">Your Last Name</label>
						<input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name">
					  </div>
					  
					  <div class="form-group">
						<label for="email">Your Email address</label>
						<input type="text" class="form-control" name="email" id="email" placeholder="name@company.com" >
					  </div>
					  <div class="form-group">
						<label for="phone">Your Telephone Number</label>
						<input type="text" class="form-control" name="phone" id="phone" placeholder="E.g +44 7847986462">
					  </div>
                           
                        <div class="quiz-form__btn">
                           <button id="gethelp" type="submit" name="submit" class="btn btn--arrow btn-green">GET DEBT HELP</button>
                           
                        </div>

                        <input type="hidden" id="q01" name="q01" value="<?php //echo $_GET['q01'] ?> ">
                        <input type="hidden" id="q02" name="q02" value="<?php //echo $_GET['q02'] ?> ">
                        <input type="hidden" id="q03" name="q03" value="<?php //echo $_GET['q03'] ?>  ">
                        <input type="hidden" id="q04" name="q04" value="<?php //echo $_GET['q04'] ?> ">
                        <input type="hidden" id="q05" name="q05" value="<?php //echo $_GET['q05'] ?> "> 
                        <input type="hidden" id="q06 " name="q06 " value="<?php //echo $_GET['q05'] ?> ">
                        <input type="hidden" id="q07 " name="q07 " value="<?php //echo $_GET['q07'] ?> ">
                        
                     </form>
       </div>-->
           <!-- end old form -->
           
   </div>
</div>
  </div>
  </div>



<?php }  ?>

<!-- end MAIN BANNER -->
<?php get_footer(); ?>
