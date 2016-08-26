package br.com.scopus.commarea.tools.gui;

import java.io.FileWriter;
import java.util.Map;

import javax.swing.JFrame;

import org.json.simple.JSONObject;

public class DialogProject extends CloseableDialog {
    private ProjectEdition panel;
    
    DialogProject(JFrame parent) {
        this(parent, null);
    }
    
    DialogProject(JFrame parent, Map<String, String> data) {
        super(parent, "Novo Projeto");
        panel = new ProjectEdition();
        
        if (data != null) {
            panel.setData(data);
        }
        
        setMainComponent(panel);
        pack();
        setLocationRelativeTo(parent);
        setResizable(false);
    }

    @Override
    protected void onSave() {
        try {
            JSONObject obj = panel.getJsonObject();
            System.out.println(obj);
            String fileName = obj.get("name") + ".caproject";
            
            FileWriter fw = new FileWriter(fileName);
            fw.write(obj.toJSONString());
            fw.flush();
            fw.close();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}
