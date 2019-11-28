package com.spring.travel.util;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.imgscalr.Scalr;
import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

public class FileUtils {
	
	// 이미지인지 확인
	// MediaType <- 을 사용하여 해당 파일의 형식을 알아낸다. 
	private static Map<String, MediaType> mediaMap;
	static {
		mediaMap = new HashMap<>();
		mediaMap.put("JPG", MediaType.IMAGE_JPEG);
		mediaMap.put("GIF", MediaType.IMAGE_GIF);
		mediaMap.put("PNG", MediaType.IMAGE_PNG);
	}
	
	public static MediaType getMediaType(String ext) {
		return mediaMap.get(ext.toUpperCase());
	}
	
	/*
	 * uploadPath/2019/11/23/fad_a.jpg
	 * 
	 * @param file
	 * 
	 * @param upload_path
	 * 
	 * @return
	 * 
	 * @throws IOException
	 */

	// 파일 업로드
	public static String uploadFile(MultipartFile file, String upload_path) throws IOException { // UUID 유니크한 아이디를
		// 만들기위해 랜덤하게 유일한값을 만들어줌으로써
		// 파일의 중복이름방지
		String filename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename(); // 이부분을 학생별로 바꾸면 될듯?_?
		String dirname = getCurrentUploadPath(upload_path);
		File target = new File(dirname, filename);
		// 스프링에서는 FileCopyUtill로 파일을 쉽게 복사 할 수 있다. (in, out);
		// Bytes혁실 배열로 String보다 크기를 줄일 수 있음
		FileCopyUtils.copy(file.getBytes(), target);
		
		String ext = getFileExtension(filename);
		
		String uploadedFileName = null;
		if(getMediaType(ext) != null)
			makeThumbnail(dirname, upload_path, filename);
		else
			makeIcon(upload_path, dirname, filename);
		// if image?
		
		
		return uploadedFileName;
	}

	private static String makeIcon(String upload_path, String dirname, String filename) {
		String iconName = dirname + filename;
		return iconName.substring(upload_path.length()).replace(File.separatorChar, '/');
	}

	private static String makeThumbnail(String dirname, String uploadRootPath, String filename) throws IOException {
		BufferedImage srcImg = ImageIO.read(new File(dirname, filename));
		BufferedImage destImg = Scalr.resize(srcImg, Scalr.Method.AUTOMATIC, Scalr.Mode.FIT_TO_HEIGHT, 100);
		
		String tumbnailName = dirname + File.separator + "s_" + filename;
		File newFile = new File(tumbnailName);
		//확장자 뽑아내기
		String ext = getFileExtension(filename);
		ImageIO.write(destImg, ext.toUpperCase(), newFile);
		
		return tumbnailName.substring(uploadRootPath.length()).replace(File.separatorChar, '/');
		
	}

	private static String getFileExtension(String filename) {
		return filename.substring(filename.lastIndexOf(".")+1);
	}

	// 날짜별로 폴더 생성
	public static String getCurrentUploadPath(String uploadRootPath) {
		Calendar cal = Calendar.getInstance();
		int y = cal.get(Calendar.YEAR);
		int m = cal.get(Calendar.MONTH) + 1;
		int d = cal.get(Calendar.DATE);

		return makeDir(uploadRootPath, "" + y, len2(m), len2(d));
	}

	// File.separator <- OS에따라 맞춰준다 윈도우는\\ 리눅스면/
	private static String makeDir(String uploadRootPath, String... paths) {
		for (String path : paths) {
			uploadRootPath += File.separator + path;
			System.out.println(uploadRootPath);
			File tmpFile = new File(uploadRootPath);
			if (tmpFile.exists())
				continue;
			else
				tmpFile.mkdir();
		}
		return uploadRootPath;
	}

	// 두자리 숫자를 String으로 바꿔준다.
	private static String len2(int n) {
		// TODO Auto-generated method stub
		return new DecimalFormat("00").format(n).toString();
	}
}
