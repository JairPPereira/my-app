import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Porcategoria from './components/pages/Porcategoria';
import TVs from './components/pages/TVs';
import SignUp from './components/pages/SignUp';
import Acao from './components/pages/Acao';
import Comedia from './components/pages/Comedia';
import A2067 from './components/pages/2067';
import Radios from './components/pages/Radios';
import Ficcao from './components/pages/Ficcao';
import Romance from './components/pages/Romance';
import Acasadomedo from "./components/pages/Acasadomedo1";
import Acertodecontas from "./components/pages/Acertodecontas";
import Aparelhagens from "./components/pages/Aparelhagens";
import Atualidade from './components/pages/Atualidade';
import Diario from './components/pages/Diario';
import Daaz from './components/pages/Daaz';
import Graopara from './components/pages/Graopara';
import Boasnovas from './components/pages/Boasnovas';
import Fmodia from './components/pages/Fmodia';
import Aformadaagua from './components/pages/Aformadaagua';
import Rba from './components/pages/Rba';
import Recordnews from './components/pages/Recordnews';
import Sbt from './components/pages/Sbt';
import Agoraestamossos from './components/pages/Agoraestamossos';
import Assasinatosdopassado from './components/pages/Assasinatosdopassado';
import Airplanevsvolcano from './components/pages/Airplanevsvolcano';
import Ajusticeira from './components/pages/Ajusticeira';
import Albertnobbs from './components/pages/Albertnobbs';
import Alemdohorizonte from './components/pages/Alemdohorizonte';
import Alendadjj from './components/pages/Alendadjj';
import Amorzumbi from './components/pages/Amorzumbi';
import Anjosdanoite from './components/pages/Anjosdanoite';
import Anovaondadoimperador from './components/pages/Anovaondadoimperador';
import Aqualquerpreco from './components/pages/Aqualquerpreco';
import Assasinosdealuguel from './components/pages/Assasinosdealuguel';
import Batalhadosimperios from './components/pages/Batalhadosimperios';
import Bloodrayne3 from './components/pages/Bloodrayne3';
import Cacadoresderecompensas from './components/pages/Cacadoresderecompensas';
import Cargaexplosiva3 from './components/pages/Cargaexplosiva3';
import Chef from './components/pages/Chef';
import Codigodeconduta from './components/pages/Codigodeconduta';
import Coragemparaamar from './components/pages/Coragemparaamar';
import Cosmopolis from './components/pages/Cosmopolis';
import Criatura from './components/pages/Criatura';
import Cubo from './components/pages/Cubo';
import Distrito13o from './components/pages/Distrito13o';
import Duna from './components/pages/Duna';
import Embuscadevinganca from './components/pages/Embuscadevinganca';
import Entreirmaos from './components/pages/Entreirmaos';
import Entreoamoreafama from './components/pages/Entreoamoreafama';
import Finch from './components/pages/Finch';
import Ghostland from './components/pages/Ghostland';
import Homemaranha from './components/pages/Homemaranha';
import Hoteldosdinossauros from './components/pages/Hoteldosdinossauros';
import Jesuskid from './components/pages/Jesuskid';
import Mariasangrenta from './components/pages/Mariasangrenta';
import Megalodon from './components/pages/Megalodon';
import Minhamaeeumaviagem from './components/pages/Minhamaeeumaviagem';
import Necroterio from './components/pages/Necroterio';
import Ninja from './components/pages/Ninja';
import Ocaminho from './components/pages/Ocaminho';
import Ocladasadagas from './components/pages/Ocladasadagas';
import Ocontodoscontos from './components/pages/Ocontodoscontos';
import Odespertar from './components/pages/Odespertar';
import Ohomemdamafia from './components/pages/Ohomemdamafia';
import Oimbativelreden from './components/pages/Oimbativelreden';
import Olhosfamintos from './components/pages/Olhosfamintos';
import Oparamo from './components/pages/Oparamo';
import Ospecialistas from './components/pages/Osespecialistas';
import Tophits from './components/pages/Tophits';
import Videoclips from './components/pages/Vdeoclips';
import Osmercenarios2 from './components/pages/Osmercenarios2';
import Psicopataamericano2 from './components/pages/Psicopataamericano2';
import Re1sident from './components/pages/Re1sident';
import Residentevilbem from './components/pages/Residentevilbem';
import Redencao from './components/pages/Redencao';
import Relacaoexplosiva from './components/pages/Relacaoexplosiva';
import Ruslan from './components/pages/Ruslan';
import Sextafeira13 from './components/pages/Sextafeira13';
import Sonic from './components/pages/Sonic';
import Tempo from './components/pages/Tempo';
import Umamorprarecordar from './components/pages/Umamorprarecordar';
import Ummatchsurpresa from './components/pages/Ummatchsurpresa';
import Ummotoristaemapuros from './components/pages/Ummotoristaemapuros';
import Umnegocioderisco from './components/pages/Umnegocioderisco';
import Umpobretaoncsb from './components/pages/Umpobretaoncsb';
import Ascensaoeqdui from './components/pages/Ascensaoeqdui';
import Aprincesa from './components/pages/Aprincesa';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/porcategoria' component={Porcategoria} />
        <Route path='/daaz' component={Daaz} />
        <Route path='/tvs' component={TVs} />
        <Route path='/radios' component={Radios} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/acao' component={Acao} />
        <Route path='/comedia' component={Comedia} />
        <Route path='/2067' component={A2067} />
        <Route path='/ficcao' component={Ficcao} />
        <Route path='/romance' component={Romance} />
        <Route path='/acasadomedo' component={Acasadomedo} />
        <Route path='/acertodecontas' component={Acertodecontas} />
        <Route path='/aparelhagens' component={Aparelhagens} />
        <Route path='/atualidade' component={Atualidade} />
        <Route path='/diario' component={Diario} />
        <Route path='/graopara' component={Graopara} />
        <Route path='/boasnovas' component={Boasnovas} />
        <Route path='/fmodia' component={Fmodia} />
        <Route path='/aformadaagua' component={Aformadaagua} />
        <Route path='/rba' component={Rba} />
        <Route path='/recordnews' component={Recordnews} />
        <Route path='/sbt' component={Sbt} />
        <Route path='/agoraestamossos' component={Agoraestamossos} />
        <Route path='/assasinatosdopassado' component={Assasinatosdopassado} />
        <Route path='/airplanevsvolcano' component={Airplanevsvolcano} />
        <Route path='/ajusticeira' component={Ajusticeira} />
        <Route path='/albertnobbs' component={Albertnobbs} />
        <Route path='/alemdohorizonte' component={Alemdohorizonte} />
        <Route path='/alendadjj' component={Alendadjj} />
        <Route path='/amorzumbi' component={Amorzumbi} />
        <Route path='/anjosdanoite' component={Anjosdanoite} />
        <Route path='/anovaondadoimperador' component={Anovaondadoimperador} />
        <Route path='/aqualquerpreco' component={Aqualquerpreco} />
        <Route path='/assasinosdealuguel' component={Assasinosdealuguel} />
        <Route path='/batalhadosimperios' component={Batalhadosimperios} />
        <Route path='/bloodrayne3' component={Bloodrayne3} />
        <Route path='/cargaexplosiva3' component={Cargaexplosiva3} />
        <Route path='/cacadoresderecompensas' component={Cacadoresderecompensas} />
        <Route path='/chef' component={Chef} />
        <Route path='/codigodeconduta' component={Codigodeconduta} />
        <Route path='/coragemparaamar' component={Coragemparaamar} />
        <Route path='/cosmopolis' component={Cosmopolis} />
        <Route path='/criatura' component={Criatura} />
        <Route path='/cubo' component={Cubo} />
        <Route path='/distrito13o' component={Distrito13o} />
        <Route path='/duna' component={Duna} />
        <Route path='/embuscadevinganca' component={Embuscadevinganca} />
        <Route path='/entreirmaos' component={Entreirmaos} />
        <Route path='/entreoamoreafama' component={Entreoamoreafama} />
        <Route path='/finch' component={Finch} />
        <Route path='/ghostland' component={Ghostland} />
        <Route path='/homemaranha' component={Homemaranha} />
        <Route path='/hoteldosdinossauros' component={Hoteldosdinossauros} />
        <Route path='/Jesuskid' component={Jesuskid} />
        <Route path='/mariasangrenta' component={Mariasangrenta} />
        <Route path='/megalodon' component={Megalodon} />
        <Route path='/minhamaeeumaviagem' component={Minhamaeeumaviagem} />
        <Route path='/necroterio' component={Necroterio} />
        <Route path='/ninja' component={Ninja} />
        <Route path='/ocaminho' component={Ocaminho} />
        <Route path='/ocladasadagas' component={Ocladasadagas} />
        <Route path='/ocontodoscontos' component={Ocontodoscontos} />
        <Route path='/odespertar' component={Odespertar} />
        <Route path='/ohomemdamafia' component={Ohomemdamafia} />
        <Route path='/olhosfamintos' component={Olhosfamintos} />
        <Route path='/oimbativelreden' component={Oimbativelreden} />
        <Route path='/oparamo' component={Oparamo} />
        <Route path='/osespecialistas' component={Ospecialistas} />
        <Route path='/tophits' component={Tophits} />
        <Route path='/vdeoclips' component={Videoclips} />
        <Route path='/osmercenarios2' component={Osmercenarios2} />
        <Route path='/psicopataamericano2' component={Psicopataamericano2} />
        <Route path='/re1sident' component={Re1sident} />
        <Route path='/residentevilbem' component={Residentevilbem} />
        <Route path='/redencao' component={Redencao} />
        <Route path='/relacaoexplosiva' component={Relacaoexplosiva} />
        <Route path='/ruslan' component={Ruslan} />
        <Route path='/sextafeira13' component={Sextafeira13} />
        <Route path='/sonic' component={Sonic} />
        <Route path='/tempo' component={Tempo} />
        <Route path='/umamorprarecordar' component={Umamorprarecordar} />
        <Route path='/ummatchsurpresa' component={Ummatchsurpresa} />
        <Route path='/ummotoristaemapuros' component={Ummotoristaemapuros} />
        <Route path='/umnegocioderisco' component={Umnegocioderisco} />
        <Route path='/umpobretaoncsb' component={Umpobretaoncsb} />
        <Route path='/ascensaoeqdui' component={Ascensaoeqdui} />
        <Route path='/aprincesa' component={Aprincesa} />


        
      </Switch>

    </Router>
    
  );
}

export default App;
