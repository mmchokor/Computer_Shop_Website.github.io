<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="./checkout.css">
</head>

<body>
  <?php
  $prod_name = $_POST["prod_name"];
  $prod_price = $_POST["prod_price"];
  ?>
  <!-- The top header -->
  <header class="main-header">
    <div class="container">
      <h1>
        <a href="../index.html">MSK</a>
        <img src="./LOGO1.png" width="50px" />
      </h1>
    </div>
  </header>

  <div class="checkout">
    <div class="row">
      <div class="col-75">
        <div class="container">
          <form action="/action_page.php">

            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Mohamed Hammoud Ahmed Chokor">
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="chokor@shireen.com">
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="Al Sayyar Street">
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="Saida">

                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="Saida">
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="5612">
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style="color:navy;"></i>
                  <i class="fa fa-cc-amex" style="color:blue;"></i>
                  <i class="fa fa-cc-mastercard" style="color:red;"></i>
                  <i class="fa fa-cc-discover" style="color:orange;"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="Shireen Shawki Al Sabea">
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="November">
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2021">
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="420">
                  </div>
                </div>
              </div>

            </div>
            <a href="thankYou.html"><input type="submit" value="Checkout" class="btn"></a>
          </form>
        </div>
      </div>

      <!--Product name and price-->
      <div class="col-25">
        <div class="container">
          <h4>Cart <span class="price" style="color:black"></h4>
          <p><?php echo $prod_name ?><span class="price">$<?php echo $prod_price ?></span></p>
          <hr>
          <p>Total <span class="price" style="color:black"><b>$<?php echo $prod_price ?></b></span></p>
        </div>
      </div>
    </div>
  </div>


  <footer class="main-footer">
    <p>
      Copyright &copy; 2021 MSK - Made by Mohamed-Hammoud Ahmed Chokor
    </p>
  </footer>

</body>

</html>