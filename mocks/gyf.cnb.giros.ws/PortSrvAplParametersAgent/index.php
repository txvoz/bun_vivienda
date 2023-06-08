<?php
header('Content-Type: text/xml; charset=utf-8');

$jData = file_get_contents("php://input");
file_put_contents('../../logs.txt', date('d-m-y h:i:s') . "::cbAuth:: " . $jData . "\n", FILE_APPEND);

?>
<?xml version="1.0" ?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getParametersAgentResponse xmlns:ns2="http://service.giros.cnb.gyf/">
            <return>
                <contextResponseType>
                    <codStateTx>PS</codStateTx>
                    <dateTx>2022-10-05T00:16:38.628-05:00</dateTx>
                    <idTx>c567992d-96ce-4971-84b4-f42191326e8a</idTx>
                </contextResponseType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>KEY_CIPHER_BACO</key>
                    <value>46CC35BA9BCF324C59C7F95612BF57AB965677E908F0F78B</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>IS_CONTACT_CENTER</key>
                    <value>false</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>CR_MIN_ADV_PAYM_ALLOWED</key>
                    <value>50000</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>CR_MAX_ADV_PAYM_ALLOWED</key>
                    <value>15000000</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>TC_MIN_ADV_PAYM_ALLOWED</key>
                    <value>50000</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>TC_MAX_ADV_PAYM_ALLOWED</key>
                    <value>8000000</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>VERSION_VOUCHER</key>
                    <value>v1</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>SEND_MONEY_CURRENCY</key>
                    <value>COP</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>PRINTER_NAME</key>
                    <value>THEA</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOLEAN</dataType>
                    <key>REPRINT_VOUCHER</key>
                    <value>true</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOLEAN</dataType>
                    <key>TWO_DIMENSIONAL_READER</key>
                    <value>false</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>NUMBER</dataType>
                    <key>NUMBER_OF_VOUCHER_TO_REPRINT</key>
                    <value>1</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>NUMBER</dataType>
                    <key>NUMBER_OF_VOUCHER_TO_PRINT</key>
                    <value>1</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>BIOMETRIC_TYPE</key>
                    <value>1</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>TipoCapturaHuella</key>
                    <value>SIMPLE</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>TipoCapturaCedula</key>
                    <value>MANUAL</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOLEAN</dataType>
                    <key>FINGERPRINT_CAPTURE</key>
                    <value>false</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOLEAN</dataType>
                    <key>VALIDATE_ENVIRONMENT</key>
                    <value>false</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>NUMBER</dataType>
                    <key>SIZE_VOUCHER</key>
                    <value>1</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>TYPES_OF_IDENTIFICATION_ALLOWED</key>
                    <value>CC;CE;PA;TI;PT</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOLEAN</dataType>
                    <key>STATE_BUTTON_EGIAIR</key>
                    <value>true</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOELAN</dataType>
                    <key>STATE_BUTTON_FIAT</key>
                    <value>true</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>STATE_BUTTON_SYF</key>
                    <value>true</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>STATE_BUTTON_REC</key>
                    <value>true</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>STRING</dataType>
                    <key>PAY_MONEY_CURRENCY</key>
                    <value>COP</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOELAN</dataType>
                    <key>STATE_BUTTON_PGI</key>
                    <value>true</value>
                </parametersAgentType>
                <parametersAgentType>
                    <dataType>BOOELAN</dataType>
                    <key>STATE_BUTTON_EGI</key>
                    <value>true</value>
                </parametersAgentType>
            </return>
        </ns2:getParametersAgentResponse>
    </S:Body>
</S:Envelope>