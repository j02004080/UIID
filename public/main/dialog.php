<?php
mb_internal_encoding('utf-8');
$call = $_POST["call"];
$actions = $_POST["actions"];

if($actions == "fetchdialog")fetchdialog($call);

function fetchdialog($dialogID)//讀取對話
{
	$filename = "dialog.txt";
	$fp_dia;
	if($fp_dia = @fopen($filename, "r"))/*print "<br>對話檔案存在<br>"*/;
	else
	{
		echo "会話が無くなる<br>";
		return 0;
	}
	$Dtxt = mb_convert_encoding(@fread($fp_dia, filesize($filename)), "UTF-8");
	echo $Dtxt;
}
?>