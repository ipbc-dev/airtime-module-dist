/* eslint-disable no-undef */
(async () => {
  const addScript = (to, src, attrs = {}) => {
    const guard = `at_${src}_promise`;
    if (window[guard]) return window[guard];
    return window[guard] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      Object.keys(attrs).forEach(key => script.setAttribute(key, attrs[key]));
      script.onload = resolve;
      script.onerror = reject;
      to.appendChild(script);
    });
  };

  const shared = ['runtime', 'vendor', 'common', 'protobuf'];
  const script = document.currentScript;
  const parent = document.documentElement; // script.parentNode;
  const attribs = {};
  for (let i = 0; i < script.attributes.length; ++i) {
    const attrib = script.attributes[i];
    if (attrib.specified && attrib.name !== 'src') attribs[attrib.name] = attrib.value;
  }
  Object.keys(attribs).forEach(attrib => script.removeAttribute(attrib));

  await Promise.all(shared.map(bundle => addScript(parent, `${'https://cdn.jsdelivr.net/gh/ipbc-dev/airtime-module-dist@0.9.9-pre7/tubepay/'}${bundle}${'.bundle.js'}`)));
  await addScript(parent, `${'https://cdn.jsdelivr.net/gh/ipbc-dev/airtime-module-dist@0.9.9-pre7/tubepay/'}${'airtime'}${'.bundle.js'}`, attribs);
})();