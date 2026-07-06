








class App extends Component {
  // Table avrà come stato la selezione di un elemento di una lista
  state = {
    selected: '',
  };

  //Ora questo stato può essere comunicato sia a Table che a Details come prop
  // Sarà però il click su un elemento di lista in table che dovrà modificare questo stato, quindi ci serve un metodo che faccia questo

