angular.module('myApp', [])
	.controller('MyController', ['$scope', function($scope) {
		$scope.data = { mode: "1"};
		$scope.win = 0;
		$scope.lose = 0;

		$scope.modes = [
		{
			id : 1,
			name : "normal",
			name_ja : "ノーマル"
		},{
			id : 2,
			name : "fiora",
			name_ja : "ふぃおらつよい"		
		},{
			id : 3,
			name : "motti",
			name_ja : "motti"					
		}];

		$scope.onClickGu = function() {
			$scope.hand = 1;
			$scope.janken();
		};

		$scope.onClickCho = function() {
			$scope.hand = 2;
			$scope.janken();
		};


		$scope.onClickPa = function() {
			$scope.hand = 3;
			$scope.janken();
		};

		$scope.janken = function() {
			$scope.aite = Math.floor( Math.random() * 3 + 1);
			// img
			if($scope.aite==1) {
				$scope.aite_img = "gu"
			} else if($scope.aite==2) {
				$scope.aite_img = "cho"
			} else {
				$scope.aite_img = "pa"
			}

			// normal mode
			if($scope.data.mode == 1){
				if($scope.hand==1) {
					if($scope.aite==1) {
						$scope.judge = "あいこ"
					} else if($scope.aite==2) {
						$scope.judge = "かち"
						$scope.win++;
					} else {
						$scope.judge = "まけ"
						$scope.lose++;
					}
				} else if($scope.hand==2) {
					if($scope.aite==1) {
						$scope.judge = "まけ"
						$scope.lose++;
					} else if($scope.aite==2) {
						$scope.judge = "あいこ"
					} else {
						$scope.judge = "かち"
						$scope.win++;
					}
				} else {
					if($scope.aite==1) {
						$scope.judge = "かち"
						$scope.win++;
					} else if($scope.aite==2) {
						$scope.judge = "まけ"
						$scope.lose++;
					} else {
						$scope.judge = "あいこ"
					}
				}
				
			}else if ($scope.data.mode == 2) {
				// fiora
				$scope.judge = "まけ"
				$scope.lose++;
			} else {
				// motti
				$scope.judge = "かち"
				$scope.win++;
			}
		}
		

	}]);
	