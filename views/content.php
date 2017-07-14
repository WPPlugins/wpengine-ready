<h3 class="<?php $version['class']; ?>"><img src="<?php echo $version['image']; ?>" class="alert_icon"/> Your WordPress Version:</h3>
<div id="message" class="<?php echo $version['class']; ?>"><p><?php echo $version['message']; ?></p></div>	



<h3><img src="<?php echo $blacklist_image; ?>" class="alert_icon"/> Blacklisted Plugins</h3>
<p><?php echo $blacklist_message; ?></p>
 
<ul>
<?php foreach($blacklisted as $plugin): ?>
	<li><strong><?php echo $plugin['name']; ?></strong> | <a href="<?php echo $plugin['src']; ?>" rel="<?php echo wp_create_nonce('wpe_deactivate_plugin'); ?>" >Deactivate Now</a> <img src="<?php echo admin_url('images/wpspin_light.gif'); ?>" class="" style="display:none;" title="" alt=""></li>
<?php endforeach; ?>
</ul>