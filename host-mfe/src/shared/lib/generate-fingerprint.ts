import Fingerprint2 from "fingerprintjs2";
import UAParser from "ua-parser-js";

export const generateFingerprint = async (): Promise<string> => {
  const options = {
    excludes: {
      plugins: true,
      localStorage: true,
      adBlock: true,
      screenResolution: true,
      availableScreenResolution: true,
      enumerateDevices: true,
      pixelRatio: true,
      doNotTrack: true,
    },
    preprocessor: (key: string, value: string) => {
      if (key === "userAgent") {
        const parser = new UAParser(value);
        // return customized me agent (without browser version)
        return `${parser.getOS().name} :: ${parser.getBrowser().name} :: ${
          parser.getEngine().name
        }`;
      }
      return value;
    },
  };

  const components = await Fingerprint2.getPromise(options);
  const values = components.map((component) => component.value);
  return String(Fingerprint2.x64hash128(values.join(""), 31));
};
