<!-- contacto -->
<section id="contacto" class="">
	<div class="row bgRed">
		<div class="col-xs-9 text-center">
			<div class="row">
				<div class="col-xs-12">
					<div class="">
						<img src="static/img/horizontal_curves.png"
							 alt="Curved Lines"
							 class="img-responsive image-centered" />
					</div>
				</div>
				<div class="col-xs-12">
					<div class="">
						<h2 class="section-title white">PONTE EN CONTACTO</h2>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-3">
			<img src="static/img/3WhiteDiag.png"
				 alt="3 Lines White Diagonal"
				 class="img-responsive image-centered" />
		</div>
	</div>
	<form class="" id="contact_form">
		<input type="hidden" name="XDEBUG_TRIGGER" id="XDEBUG_TRIGGER" value="PHPSTORM">
		<div class="row bgRed">
			<p> </p>
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
			<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
				<div class="form-elements-inner-padding">
					<label for="iptName" class="form-label"></label>
					<input type="text"
						   name="iptName"
						   maxlength="30"
						   placeholder="Your Name"
						   class="form-control"
						   id="iptName">
				</div>
			</div>
			<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
				<div class="form-elements-inner-padding">
					<label for="iptEmail" class="form-label"></label>
					<input type="email"
						   name="iptEmail"
						   maxlength="50"
						   placeholder="Email Address"
						   class="form-control"
						   id="iptEmail">
				</div>
			</div>
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
		</div>
		<div class="row bgRed">
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
			<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
				<div class="form-elements-inner-padding">
					<label for="iptMessage" class="form-label"></label>
					<textarea name="iptMessage"
							  style="padding-left: 6px;"
							  id="iptMessage"
							  class="form-control"
							  placeholder="Your Message"
							  cols="30"
							  maxlength="500"
							  rows="10"></textarea>
				</div>
			</div>
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
		</div>
		<div class="row bgRed"><p class="bgRed">&nbsp;</p></div>
		<div class="row bgRed">
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">
				<div class="form-elements-inner-padding">
					<button type="submit"
							class="btn btn-yellow red btn-lg btn-block"
							id="btnSubmitContact">ENVIAR</button>
				</div>
			</div>
		</div>
		<div class="row bgRed"><p>&nbsp;</p></div>
		<div class="row bgRed">
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
			<div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
				<div class="form-elements-inner-padding">
					<div class="hidden alert" role="alert" id="contact-form-response"></div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-1 col-md-1 col-lg-1"></div>
	</form>
	<div class="row bgRed">
		<div class="col-xs-12"><p>&nbsp;</p></div>
	</div>
</section>
