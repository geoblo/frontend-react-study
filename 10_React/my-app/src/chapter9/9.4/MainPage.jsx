import React from 'react';

const styles = {
  button: {
    height: 40,
    width: 200,
  },
  warning: {
    backgroundColor: 'red',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: 'white',
  }
};

function WarningBanner(props) {
  return (
    <div>
      Warning!
    </div>
  );
}

function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <div>
      
    </div>
  );
}

export default MainPage;